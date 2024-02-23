import React, { useEffect} from "react";
import { Row, Table, Col, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteCategory, fetchCategories } from "./categorySlice";
import { Link } from "react-router-dom";

const List: React.FC = () => {
  const onDelete = (id: string) => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) dispatch(deleteCategory(id));
  }
  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id: string) => {
        return (
          <Button onClick={() => onDelete(id)}>
            Delete
          </Button>
        )
      }
    }
  ];
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.list);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Row>
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 24, offset: 0 }}
        md={{ span: 0, offset: 0 }}
      >
      </Col>
      <Col
        xs={{ span: 0, offset: 0 }}
        sm={{ span: 0, offset: 0 }}
        md={{ span: 24, offset: 0 }}
        lg={{ span: 24, offset: 0 }}
        xl={{ span: 24, offset: 0 }}
        xxl={{ span: 24, offset: 0 }}
      >
        <Button className="mb-1">
          <Link to='/categories/create'>
            Create
          </Link>
        </Button>
        <Table
          locale={{
            emptyText: "Data Yok :(",
            filterSearchPlaceholder: "Ara",
          }}
          columns={columns}
          dataSource={categories}
        />
      </Col>
    </Row>
  );
};

export default List;