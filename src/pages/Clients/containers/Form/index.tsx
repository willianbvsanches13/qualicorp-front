import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { message, Spin } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

import api from '~/services/api';
import Input from '~/components/Input';
import RagioGroup from '~/components/RadioGroup';

import { Header, Loading } from '../../styles';

import { Container, Content, ContentLine } from './styles';

interface FormProps {
  edit?: boolean;
}

const Form: React.FC<FormProps> = ({ edit }) => {
  const { register, handleSubmit, setValue } = useForm();
  const { id }: { id: string } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(edit ? true : false);

  async function onSubmit(data: object) {
    setLoading(true);
    if (edit) {
      try {
        await api.put(`clients/${id}`, data);
        message.success('Cliente atualizado com sucesso!');
        setLoading(false);
        history.push('/list');
      } catch (error) {
        message.error(error.response.message);
      }
    } else {
      try {
        await api.post('clients', data);
        message.success('Cliente salvo com sucesso!');
        setLoading(false);
        history.push('/list');
      } catch (error) {
        message.error(error.response.message);
      }
    }
  }

  async function getClient() {
    const editavel = await api.get(`clients/${id}`);
    if (!editavel.data.length) history.push('/list');

    setValue('name', editavel.data[0]?._fields[0]?.properties?.name);
    setValue('cpf', editavel.data[0]?._fields[0]?.properties?.cpf);
    setValue('email', editavel.data[0]?._fields[0]?.properties?.email);
    setValue('phone', editavel.data[0]?._fields[0]?.properties?.phone);
    setValue('gender', editavel.data[0]?._fields[0]?.properties?.gender);
    setValue('birth', editavel.data[0]?._fields[0]?.properties?.birth);
    setValue('city', editavel.data[0]?._fields[0]?.properties?.city);
    setValue('state', editavel.data[0]?._fields[0]?.properties?.state);
    setValue('address', editavel.data[0]?._fields[0]?.properties?.address);
    setValue('district', editavel.data[0]?._fields[0]?.properties?.district);
    setValue('number', editavel.data[0]?._fields[0]?.properties?.number);
    setValue('complement', editavel.data[0]?._fields[0]?.properties?.complement);

    setLoading(false);
  }

  useEffect(() => {
    if (edit) {
      getClient();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);
  return (
    <Container>
      {loading && <Loading><Spin size="large" /></Loading>}
      <Header>{edit ? 'Editar' : 'Cadastrar'} Cliente</Header>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <ContentLine>
          <Input
            required
            ref={register}
            label="*Nome"
            name="name"
          />
          <Input
            required
            ref={register}
            label="*CPF"
            name="cpf"
          />
        </ContentLine>
        <ContentLine>
          <Input
            required
            ref={register}
            label="*E-mail"
            name="email"  
            type="email"
          />
          <Input
            required
            ref={register}
            label="*Telefone"
            name="phone"
          />
        </ContentLine>
        <ContentLine>
          <RagioGroup
            ref={register}
            label="Gênero"
            name="gender"
            value={[
              { name: 'Masculino', value: 'male' },
              { name: 'Feminino', value: 'female' },
              { name: 'Outro', value: 'other' },
            ]}
          />
          <Input
            ref={register}
            label="Data de nascimento"
            type="date"
            name="birth"
          />
        </ContentLine>
        <ContentLine>
          <Input
            ref={register}
            label="Cidade"
            name="city"
          />
          <Input
            ref={register}
            label="Estado"
            name="state"
          />
        </ContentLine>
        <ContentLine>
          <Input
            ref={register}
            label="Endereço"
            name="address"
          />
          <Input
            ref={register}
            label="Bairro"
            name="district"
          />
        </ContentLine>
        <ContentLine>
          <Input
            ref={register}
            label="Número"
            name="number"
          />
          <Input
            ref={register}
            label="Complemento"
            name="complement"
          />
        </ContentLine>
        <button type="submit">Salvar</button>
      </Content>
    </Container>
  );
}

Form.defaultProps = {
  edit: false,
};

export default Form;