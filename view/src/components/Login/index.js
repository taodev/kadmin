import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import {Button, Row, Form, Input} from 'antd'
const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleOk = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'login/login', payload: values });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {loginLoading} = this.props.login;

    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          {/*<img alt={'logo'} src={config.logo} />
          <span>{config.name}</span>*/}
        </div>
        <Form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: "请输入用户名",
                },
              ],
            })(<Input size="large" onPressEnter={this.handleOk} placeholder="用户名" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: "请输入密码",
                },
              ],
            })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="密码" />)}
          </FormItem>
          <Row>
            <Button type="primary" size="large" onClick={this.handleOk} loading={loginLoading}>
              登录
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(({ login }) => ({ login }))(Form.create()(LoginForm));
