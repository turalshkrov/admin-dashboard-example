import { Layout, theme } from 'antd';
import { SiderMenu } from '../Sider';

const { Content } = Layout;

export const AppLayout = ({ content }: { content?: React.ReactNode}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <SiderMenu />
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 18,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {content}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
