import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

import avatar from '../../assets/avatar.svg'
import arrow from '../../assets/arrow.svg'
import trash from '../../assets/trash.svg'
import { H1 } from '../../components/Title/styles';
import ContainerItens from '../../components/Container Itens';
import Button from '../../components/Button';
import {
  Container,
  Image,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const { data: newUsers } = await axios.get(`http://localhost:3001/users`);

      setUsers(newUsers);
    }

    fetchUser()
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate('/')

  }

  return (
    <Container>
      <Image alt="logo-image" src={avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuarios</H1>


        <div>
          <ul>
            {users.map((user) => (
              <user key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}><img src={trash} alt="lata-de-lixo" /></button>
              </user>
            ))}
          </ul>
        </div>

        <Button isBack={true} onClick={goBackPage}><img alt="Seta" src={arrow} /> Voltar </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;


