/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Grid, Input, Label, Button } from 'semantic-ui-react';

import styles from './Form.module.scss';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    apartment_id: Yup.number(),
    arrival_date: Yup.date(),
    deposit: Yup.number(),
    cold_water: Yup.number(),
    hot_water: Yup.number(),
    electricity: Yup.number(),
  }),

  validate: (values: any) => {
    const errors: any = {};
    const {
      apartment_id,
      arrival_date,
      deposit,
      cold_water,
      hot_water,
      electricity,
    } = values;

    if (apartment_id !== '') {
      delete errors.apartment_id;
    } else {
      errors.apartment_id = 'Обязательное поле';
    }
    if (arrival_date !== '') {
      delete errors.arrival_date;
    } else {
      errors.arrival_date = 'Обязательное поле';
    }
    if (deposit !== '') {
      delete errors.deposit;
    } else {
      errors.deposit = 'Обязательное поле';
    }
    if (cold_water !== '') {
      delete errors.cold_water;
    } else {
      errors.cold_water = 'Обязательное поле';
    }
    if (hot_water !== '') {
      delete errors.hot_water;
    } else {
      errors.hot_water = 'Обязательное поле';
    }
    if (electricity !== '') {
      delete errors.electricity;
    } else {
      errors.electricity = 'Обязательное поле';
    }

    return errors;
  },

  enableReinitialize: true,

  handleSubmit: (values: any, { props }: any) => {
    const payload: any = {};
    payload.apartment_id = values.apartment_id;
    payload.arrival_date = values.arrival_date;
    payload.deposit = values.deposit;
    payload.cold_water = values.cold_water;
    payload.hot_water = values.hot_water;
    payload.electricity = values.electricity;

    props.handleSubmitData(payload);
  },

  displayName: 'CalcPaymentsForm',
});

const FormConst = (props: any) => {
  const { values, setFieldValue, errors, handleSubmit, isFetching } = props;

  return (
    <div className={styles.mainBlock}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.headerLabel}>Расчет платежей</h3>
      </div>

      {/* Form */}
      <Form loading={isFetching}>
        {/* ID объекта */}
        <Form.Field className={styles.smallMarginBottom}>
          <Grid.Column tablet={16} mobile={16} computer={16}>
            <label htmlFor="apartment_id" className={styles.labelDirection}>
              ID объекта
            </label>
            <Input
              value={values.userNumber}
              error={errors.userNumber ? true : false}
              name="apartment_id"
              size="mini"
              onChange={(e: any) => {
                setFieldValue('apartment_id', e.target.value);
              }}
            >
              <input
                inputMode="none"
                className={styles.inputBorder}
                autoComplete="off"
              />
            </Input>
            {errors.apartment_id && (
              <Label basic color="red" pointing>
                {errors.apartment_id}
              </Label>
            )}
          </Grid.Column>
        </Form.Field>

        {/* Дата заезда */}
        <Form.Field className={styles.smallMarginBottom}>
          <Grid.Column tablet={16} mobile={16} computer={16}>
            <label htmlFor="arrival_date" className={styles.labelDirection}>
              Дата заезда
            </label>
            <Input
              value={values.userNumber}
              error={errors.userNumber ? true : false}
              name="arrival_date"
              size="mini"
              onChange={(e: any) => {
                setFieldValue('arrival_date', e.target.value);
              }}
            >
              <input
                inputMode="none"
                className={styles.inputBorder}
                autoComplete="off"
              />
            </Input>
            {errors.arrival_date && (
              <Label basic color="red" pointing>
                {errors.arrival_date}
              </Label>
            )}
          </Grid.Column>
        </Form.Field>

        {/* Количество месяцев рассрочки */}
        <Form.Field className={styles.smallMarginBottom}>
          <Grid.Column tablet={16} mobile={16} computer={16}>
            <label htmlFor="deposit" className={styles.labelDirection}>
              Количество месяцев рассрочки
            </label>
            <Input
              value={values.userNumber}
              error={errors.userNumber ? true : false}
              name="deposit"
              size="mini"
              onChange={(e: any) => {
                setFieldValue('deposit', e.target.value);
              }}
            >
              <input
                inputMode="none"
                className={styles.inputBorder}
                autoComplete="off"
              />
            </Input>
            {errors.deposit && (
              <Label basic color="red" pointing>
                {errors.deposit}
              </Label>
            )}
          </Grid.Column>
        </Form.Field>

        {/* Показания холодной воды */}
        <Form.Field className={styles.smallMarginBottom}>
          <Grid.Column tablet={16} mobile={16} computer={16}>
            <label htmlFor="cold_water" className={styles.labelDirection}>
              Показания холодной воды
            </label>
            <Input
              value={values.userNumber}
              error={errors.userNumber ? true : false}
              name="cold_water"
              size="mini"
              onChange={(e: any) => {
                setFieldValue('cold_water', e.target.value);
              }}
            >
              <input
                inputMode="none"
                className={styles.inputBorder}
                autoComplete="off"
              />
            </Input>
            {errors.cold_water && (
              <Label basic color="red" pointing>
                {errors.cold_water}
              </Label>
            )}
          </Grid.Column>
        </Form.Field>

        {/* Показания горячей воды */}
        <Form.Field className={styles.smallMarginBottom}>
          <Grid.Column tablet={16} mobile={16} computer={16}>
            <label htmlFor="hot_water" className={styles.labelDirection}>
              Показания горячей воды
            </label>
            <Input
              value={values.userNumber}
              error={errors.userNumber ? true : false}
              name="hot_water"
              size="mini"
              onChange={(e: any) => {
                setFieldValue('hot_water', e.target.value);
              }}
            >
              <input
                inputMode="none"
                className={styles.inputBorder}
                autoComplete="off"
              />
            </Input>
            {errors.hot_water && (
              <Label basic color="red" pointing>
                {errors.hot_water}
              </Label>
            )}
          </Grid.Column>
        </Form.Field>

        {/* Показания электроэнергии */}
        <Form.Field className={styles.smallMarginBottom}>
          <Grid.Column tablet={16} mobile={16} computer={16}>
            <label htmlFor="electricity" className={styles.labelDirection}>
              Показания электроэнергии
            </label>
            <Input
              value={values.userNumber}
              error={errors.userNumber ? true : false}
              name="electricity"
              size="mini"
              onChange={(e: any) => {
                setFieldValue('electricity', e.target.value);
              }}
            >
              <input
                inputMode="none"
                className={styles.inputBorder}
                autoComplete="off"
              />
            </Input>
            {errors.electricity && (
              <Label basic color="red" pointing>
                {errors.electricity}
              </Label>
            )}
          </Grid.Column>
        </Form.Field>

        <Grid>
          <Grid.Column tablet={16} mobile={16} computer={16}>
            <Button color="violet" onClick={handleSubmit} type="submit">
              Рассчитать
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </div>
  );
};

const CalcPaymentsFormEnhanced = formikEnhancer(FormConst);

interface ICalcPaymentsFormProps {
  handleSubmitData: (values: any) => void;
  isFetching: boolean;
}

/**
 * Компонент формы для редактирования/создания пользователей в системе
 *
 * @param {*} props
 * @param {*} props.selectedUser -- данные для формы
 *
 * @returns <CalcPaymentsFormEnhanced {...this.props} />
 */
export default class CalcPaymentsForm extends React.Component<
  ICalcPaymentsFormProps
> {
  render() {
    return <CalcPaymentsFormEnhanced {...this.props} />;
  }
}
