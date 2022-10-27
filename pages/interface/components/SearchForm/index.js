import { SearchField } from '../TextField';
import { SelectField } from '../Select';

export function SearchForm({ selectFields }) {
  return (
    <div
      css={{
        justifyContent: 'space-between',
        width: 'fill-available',
        alignItems: 'center',
        marginBottom: '15px',
        display: 'flex',
        gap: '10px',
      }}>
      <SearchField placeholder="Pesquisar" />
      {selectFields &&
        selectFields.map((options) => {
          return <SelectField options={options} />;
        })}
    </div>
  );
}
