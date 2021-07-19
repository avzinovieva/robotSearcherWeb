import React, { useState } from 'react';
// @ts-ignore
import { ExcelRenderer } from 'react-excel-renderer';
import { connect } from 'react-redux';
import TopBar from '../TopBar/TopBar';
import styles from './categories.module.scss';
import { categoriesPrice } from '../../state/modules/categoriesPrice/action';
import t from '../../translations/i18n';

const CategoriesPrice: React.FC = ({ categoriesFunc }: any) => {
  const [file, setFile] = useState<any>(null);
  const value: any = {
    categories: {
      name: 'name1',
      defaultPrice: 45,
    },
  };

  const sendToTheServer = () => {
    categoriesFunc(value);
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

  return (
    <div className={styles.categoriesPrice}>
      <TopBar />
      <div className={styles.categoriesPriceHeader}>{`${t('categoriesPrice.header')}`}</div>
      <div className={styles.categoriesPriceFileLoader}>
        <input type="file" onChange={fileHandler} />
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
  loading: categories.loading,
});

export default connect(
  () => mapStateToProps,
  { categoriesFunc: categoriesPrice },
)(CategoriesPrice);
