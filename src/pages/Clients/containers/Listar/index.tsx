import React, { useEffect, useState, useMemo } from 'react';
import { Table, Tooltip, Popconfirm, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faBan } from '@fortawesome/free-solid-svg-icons';

import api from '~/services/api';
import useDimensions from '~/utils/dimensions';

import { Header, Loading } from '../../styles';

import { Container, Content, ContentActions } from './styles';

const Listar: React.FC = () => {
  const history = useHistory();
  const dimensions = useDimensions();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);

  const params = useMemo(() => ({
    page,
    perPage,
    total,
  }), [page, perPage, total]);

  async function getList() {
    setLoading(true);
    const lista = await api.get(`/clients?page=${page}&perPage=${perPage}`);
    if (lista) {
      setList(lista.data.data);
      setTotal(lista.data.meta.total);
    }
    setLoading(false);
  }

  async function handleDeleteClient(id: string) {
    setLoading(true);
    await api.delete(`clients/${id}`);
    getList();
  }

  function handleEditClick(id: string) {
    history.push(`/edit/${id}`);
  }

  function onChangePagination(currentPage: number | undefined, currentSize: number | undefined) {
    setPage(currentPage || page);
    setPerPage(currentSize || perPage);
  }

  useEffect(() => {
    getList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    setIsMobile(dimensions.width <= 770 ? true : false);
  }, [dimensions])

  const columns = isMobile ? [
    {
      title: 'Nome',
      dataIndex: `name`,
      key: 'name',
      render: (_text: any, render: any) => {
        return <span>{render?._fields[0]?.properties?.name}</span>;
      },
    },
    {
      title: 'E-mail',
      dataIndex: `email`,
      key: 'email',
      render: (_text: any, render: any) => {
        return <span>{render?._fields[0]?.properties?.email}</span>;
      },
    },
    {
      title: 'Ações',
      dataIndex: `actions`,
      key: 'actions',
      render: (_text: any, render: any) => {
        return (
          <ContentActions>
            <Tooltip title="Editar" placement="bottom">
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleEditClick(render?._fields[0]?.properties?.id)}
              />
            </Tooltip>
            <Tooltip title="Apagar" placement="bottom">
              <Popconfirm
                title="Deseja realmente apagar o cliente?"
                cancelText="Não"
                okText="Sim"
                onConfirm={() => handleDeleteClient(render?._fields[0]?.properties?.id)}
              >
                <FontAwesomeIcon icon={faBan} />
              </Popconfirm>
            </Tooltip>
          </ContentActions>
        );
      },
    },
  ] : [
    {
      title: 'Nome',
      dataIndex: `name`,
      key: 'name',
      render: (__text: any, render: any) => {
        return <span>{render?._fields[0]?.properties?.name}</span>;
      },
    },
    {
      title: 'E-mail',
      dataIndex: `email`,
      key: 'email',
      render: (__text: any, render: any) => {
        return <span>{render?._fields[0]?.properties?.email}</span>;
      },
    },
    {
      title: 'CPF',
      dataIndex: `cpf`,
      key: 'cpf',
      render: (_text: any, render: any) => {
        return <span>{render?._fields[0]?.properties?.cpf}</span>;
      },
    },
    {
      title: 'Telefone',
      dataIndex: `phone`,
      key: 'phone',
      render: (_text: any, render: any) => {
        return <span>{render?._fields[0]?.properties?.phone}</span>;
      },
    },
    {
      title: 'Ações',
      dataIndex: `actions`,
      key: 'actions',
      render: (_text: any, render: any) => {
        return (
          <ContentActions>
            <Tooltip title="Editar" placement="bottom">
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleEditClick(render?._fields[0]?.properties?.id)}
              />
            </Tooltip>
            <Tooltip title="Apagar" placement="bottom">
              <Popconfirm
                title="Deseja realmente apagar o cliente?"
                cancelText="Não"
                okText="Sim"
                onConfirm={() => handleDeleteClient(render?._fields[0]?.properties?.id)}
              >
                <FontAwesomeIcon icon={faBan} />
              </Popconfirm>
            </Tooltip>
          </ContentActions>
        );
      },
    },
  ];

  return (
    <Container>
      {loading && <Loading><Spin size="large" /></Loading>}
      <Header>Listar Clientes</Header>
      <Content>
        <Table
          columns={columns}
          dataSource={list}
          pagination={{
            pageSize: perPage,
            current: page,
            pageSizeOptions: ['10', '25', '50'],
            showSizeChanger: true,
            total,
            onChange: onChangePagination,
          }}
        />
      </Content>
    </Container>
  );
}

export default Listar;