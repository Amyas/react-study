import React from "react";
import { connect } from "dva";
import { Link, Route } from "dva/router";
import styles from "./AppLayout.css";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
import dynamic from "dva/dynamic";

class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      navIndex: "1"
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentWillMount() {
    this.updateNav();
  }
  updateNav() {
    // const { nav, location: { pathname } } = this.props;
    // let navIndex = nav.filter(e => {
    //   return e.route == pathname;
    // })[0];
    // if (navIndex) {
    //   this.asetState({
    //     navIndex: String(navIndex.id)
    //   });
    // }
  }
  render() {
    const { app,routes } = this.props;
    return (
      <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[this.state.navIndex]}
          >
            <Menu.Item key="1">
              <Icon type="video-camera" />
              <span>首页</span>
              <Link to="/app" replace />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>员工管理</span>
              <Link to="/app/users" replace />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {routes.map(({ path, ...dynamics }) => {
              return (
                <Route
                  exact
                  key={path}
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics
                  })}
                />
              );
            })}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

AppLayout.propTypes = {};

export default AppLayout;
