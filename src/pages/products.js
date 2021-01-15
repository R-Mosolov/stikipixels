import HeaderAndSidebar from '../components/header-and-sidebar';
import ProductsTable from '../components/tables/products-table';

export default function Products() {
  return (
    <>
      <HeaderAndSidebar
        titleText="Продукты"
        tableContent={<ProductsTable />}
      />
    </>
  );
}
