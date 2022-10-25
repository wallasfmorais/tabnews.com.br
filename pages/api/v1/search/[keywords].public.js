import nextConnect from 'next-connect';
import controller from 'models/controller.js';
import authentication from 'models/authentication.js';
import authorization from 'models/authorization.js';
import validator from 'models/validator.js';
import content from 'models/content.js';

export default nextConnect({
  attachParams: true,
  onNoMatch: controller.onNoMatchHandler,
  onError: controller.onErrorHandler,
})
  .use(controller.injectRequestMetadata)
  .use(authentication.injectAnonymousOrUser)
  .use(controller.logRequest)
  .get(getValidationHandler, getHandler);

function getValidationHandler(request, response, next) {
  const cleanValues = validator(request.query, {
    keywords: 'required',
  });

  request.query = cleanValues;

  next();
}

async function getHandler(request, response) {
  const userTryingToList = request.context.user;
  const { keywords } = request.query;
  const results = await content.findByKeywords(keywords, {
    strategy: request.query.strategy,
    where: {
      parent_id: null,
      status: 'published',
    },
    page: request.query.page,
    per_page: request.query.per_page,
  });

  const contentList = results.rows;

  const secureOutputValues = authorization.filterOutput(userTryingToList, 'read:content:list', contentList);
  return response.status(200).json(secureOutputValues);
}
