import React from 'react';
import { connect } from 'dva';
import {Form, Icon, Input, Button, CheckBox} from 'antd';
const FormItem = Form.Item;
import styles from './IndexPage.css';

import Login from '../components/Login';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>测试一下中文</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <div>
        <Login></Login>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
