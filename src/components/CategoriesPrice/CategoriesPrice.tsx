import React, { useEffect, useState } from 'react';
// @ts-ignore
import { ExcelRenderer } from 'react-excel-renderer';
import { connect } from 'react-redux';
import TopBar from '../TopBar/TopBar';
import styles from './categories.module.scss';
import { categoriesPrice } from '../../state/modules/categoriesPrice/action';
import t from '../../translations/i18n';
import { categories } from '../../state/modules/categories/action';

interface IProps {
  categoriesFuncPrice:(value: {}) => {};
  categoriesFunc:() => {};
  categories: {id: number, name: string}[];
}

const CategoriesPrice: React.FC<IProps> = ({
  categoriesFuncPrice,
  categoriesFunc, categories,
}: IProps) => {
  const [file, setFile] = useState<any>(null);
  const [categoriesArray, setCategoriesArray] = useState<number>(6);
  const value: any = {
    parentWorkTypeId: categoriesArray,
    workTypes: [
      {
        name: '',
        defaultPrice: 0,
      },
    ],
  };
  const sendToTheServer = () => {
    for (let i: number = 1; i < file.rows.length; i += 1) {
      value.workTypes.push({ name: file.rows[i][0], defaultPrice: file.rows[i][1] });
    }
    value.workTypes.shift();
    categoriesFuncPrice(value);
    window.location.reload();
  };
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCategoriesArray(+e.target.value);
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) {
      return;
    }
    const fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err:string, resp: {cols: string, rows: string}) => {
      setFile({
        cols: resp.cols,
        rows: resp.rows,
      });
    });
  };
  useEffect(() => {
    categoriesFunc();
  }, []);

  return (
    <div className={styles.categoriesPrice}>
      <TopBar />
      <div className={styles.categoriesPriceHeader}>{`${t('categoriesPrice.header')}`}</div>
      <div className={styles.categoriesPriceFileLoader}>
        <input type="file" onChange={fileHandler} />
        <select name="categories" id="categories" onChange={selectHandler}>
          <option value="1">{`${t('messagePrice')}`}</option>
          {categories ? categories.map((item: {id: number, name: string}) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          )) : null}
        </select>
      </div>
      {
        file
        && file.rows.map((item:{0: string, 1: string}) => (
          <div className={styles.categoriesPriceBox} key={item[1]}>
            <p className={styles.categoriesPriceP}>
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </p>
          </div>
        ))
      }
      <div className={styles.categoriesPriceButtonBox}>
        {file
        && (
        <button
          type="button"
          className={styles.categoriesPriceButton}
          onClick={sendToTheServer}
        >
          {`${t('mastersRequestsList.button.buttonAccept')}`}
        </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (categories: {categories: {id: number, name: string}[]}) => ({
  categories: categories.categories,
});

export default connect(
  () => mapStateToProps,
  { categoriesFuncPrice: categoriesPrice, categoriesFunc: categories },
)(CategoriesPrice);
