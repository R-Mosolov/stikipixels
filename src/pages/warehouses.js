import HeaderAndSidebar from '../components/header-and-sidebar';
import WarehousesTable from '../components/tables/warehouses-table';

export default function Warehouses() {
  return (
    <>
      <HeaderAndSidebar
        titleText="Склады"
        tableContent={<WarehousesTable />}
      />
    </>
  );
}
