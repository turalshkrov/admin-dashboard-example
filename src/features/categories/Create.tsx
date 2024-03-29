import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../../app/hooks';
import { createCategory } from './categorySlice';
import { Link, useNavigate } from 'react-router-dom';
import { Category } from './types';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

export const Create = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = (values: Category) => {
    dispatch(createCategory(values));
    form.resetFields();
    navigate("/categories")
  }
  return (
    <>
      <Button className='mb-2'>
        <Link to='/categories'>
          Categories
        </Link>
      </Button>
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"categoryName"}
          label="Category Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={"description"} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
