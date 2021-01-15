import React, { forwardRef } from 'react';

import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function ProductsTable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Название продукта', field: 'productName' },
    { title: 'Количество, шт.', field: 'count', type: 'numeric' },
    { title: 'Склад для хранения', field: 'warehouseName', initialEditValue: 'Не определён' },
  ]);

  const [data, setData] = useState([
    { productName: 'Рыба', count: 10, warehouseName: 'Склад ' + '\"A\"' },
    { productName: 'Рыба', count: 7, warehouseName: 'Не определён' },
    { productName: 'Молоко', count: 12, warehouseName: 'Склад ' + '\"B\"' },
  ]);

  return (
    <MaterialTable
      icons={tableIcons}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) => new Promise((resolve, reject) => {
          setTimeout(() => {
            setData([...data, newData]);

            resolve();
          }, 1000);
        }),
        onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);

            resolve();
          }, 1000);
        }),
        onRowDelete: (oldData) => new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);

            resolve();
          }, 1000);
        }),
      }}
      options={{
        showTitle: false,
        grouping: true,
      }}
      localization={{
        header: {
          actions: 'Действия',
        },
        body: {
          emptyDataSourceMessage: 'Нет записей для отображения',
          addTooltip: 'Добавить',
          deleteTooltip: 'Удалить',
          editTooltip: 'Редактировать',
          editRow: {
            cancelTooltip: 'Отменить',
            saveTooltip: 'Сохранить',
            deleteText: 'Вы уверены? Если это единственный продукт с таким названием, он будет удалён со всех складов.',
          },
        },
        grouping: {
          placeholder: 'Чтобы сгруппировать позиции, перенесите сюда заголовок для группировки, например "Название продукта"',
        },
        toolbar: {
          searchTooltip: 'Искать',
          searchPlaceholder: 'Поисковый запрос...',
        },
        pagination: {
          labelRowsSelect: 'строк',
          firstAriaLabel: 'Первая страница',
          firstTooltip: 'Первая страница',
          previousAriaLabel: 'Предыдущая сраница',
          previousTooltip: 'Предыдущая сраница',
          nextAriaLabel: 'Следующая страница',
          nextTooltip: 'Следующая страница',
          lastAriaLabel: 'Последняя страница',
          lastTooltip: 'Последняя страница',
        },
      }}
    />
  );
}
