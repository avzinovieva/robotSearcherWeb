import React, { useEffect, useState } from 'react';
// @ts-ignore
import { ExcelRenderer } from 'react-excel-renderer';
import { connect } from 'react-redux';
import TopBar from '../TopBar/TopBar';
import styles from './categories.module.scss';
import { categoriesPrice } from '../../state/modules/categoriesPrice/action';
import t from '../../translations/i18n';
import { categories } from '../../state/modules/categories/action';

const CategoriesPrice: React.FC = ({ categoriesFuncPrice, categoriesFunc, categories }: any) => {
  const [file, setFile] = useState<any>(null);
  const [categoria, setCategoria] = useState(1);
  const value: any = {
    parentWorkTypeId: { categoria },
    workTypes: [
      {
        name: '',
        price: 0,
      },
    ],
  };
  const sendToTheServer = () => {
    for (let i: number = 1; i < file.rows.length; i++) {
      value.workTypes.push({ name: file.rows[i][0], price: file.rows[i][1] });
    }
    value.workTypes.shift();
    categoriesFuncPrice(value);
    setFile(null);
  };

  const fileHandler = (e:any) => {
    const fileObj = e.target.files[0];

    ExcelRenderer(fileObj, (err:any, resp:any) => {
      setFile({
        cols: resp.cols,
        rows: resp.rows,
      });
    });
  };
  useEffect(() => {
    categoriesFunc();
  }, [categories]);

  return (
    <div className={styles.categoriesPrice}>
      <TopBar />
      <div className={styles.categoriesPriceHeader}>{`${t('categoriesPrice.header')}`}</div>
      <div className={styles.categoriesPriceFileLoader}>
        <input type="file" onChange={fileHandler} />
        <select name="cat" id="categ">
          <option value="1" onChange={(e: any) => setCategoria(e.target.value)}>{`${t('messagePrice')}`}</option>
          {categories ? categories.map((item: {id: number, name: string}) => (
            <option value={item.id} disabled>{item.name}</option>
          )) : null}
        </select>
      </div>
      {
        file
        && file.rows.map((item:{0: any, 1: any}) => (
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

const mapStateToProps = ({ categories }: any) => ({
  categories: categories.categories,
});

export default connect(
  () => mapStateToProps,
  { categoriesFuncPrice: categoriesPrice, categoriesFunc: categories },
)(CategoriesPrice);
