import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TableElement from './TableElement';
import { Button, makeStyles, Paper, Table,  TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  const [users, setUsers] = useState([{"name":"EbolaChinola","uuid":"4cb2c381-dbfd-4b2f-ab89-ec7228b9af36","expiresOn":"2021-06-27 15:25:40 +0200"},{"name":"urdad2507","uuid":"5a060298-d35d-36cf-be3d-0d4792eb7349","expiresOn":"2021-06-15 18:52:49 +0200"},{"name":"zmaj5525","uuid":"1dafecc8-babd-3267-a379-e24011b0f0ee","expiresOn":"2021-06-15 18:52:51 +0200"},{"name":"earlvince","uuid":"da8ed095-4e01-3aa0-9d96-d0b63782ff1e","expiresOn":"2021-06-15 18:53:03 +0200"},{"name":"yuormumisstupid","uuid":"67a0e213-5786-3177-b717-a5ed2bd97c9b","expiresOn":"2021-06-15 18:52:58 +0200"},{"name":"grishthenoob","uuid":"d45b0285-cc5a-3447-b363-13241b4a4009","expiresOn":"2021-06-15 18:52:50 +0200"},{"name":"srisaigamers","uuid":"5eac622e-d0d9-3522-b221-cca239dbfc25","expiresOn":"2021-06-15 18:53:04 +0200"},{"name":"ellopleasebenice","uuid":"6799e76f-bd08-35f9-93f7-2c49966b24e1","expiresOn":"2021-06-15 18:52:52 +0200"},{"name":"vinterjay45","uuid":"a1b4fe19-1482-309c-9d8d-f6cb857fb763","expiresOn":"2021-06-15 18:53:06 +0200"},{"name":"avenged_guy","uuid":"836935ed-dac4-30c2-936a-dcc29c8b0c58","expiresOn":"2021-06-15 18:53:05 +0200"},{"name":"erezmemory","uuid":"be933de2-0545-33f9-8f4d-c4dba21c8ff3","expiresOn":"2021-06-15 18:53:08 +0200"},{"name":"adrititos","uuid":"d12a6ab1-dafe-3c53-8162-26c1bf930a15","expiresOn":"2021-06-15 18:53:09 +0200"},{"name":"big69fan","uuid":"86575152-c9a6-3ff8-b5de-b0f6acaa3b83","expiresOn":"2021-06-15 18:53:04 +0200"},{"name":"frickedsasah","uuid":"2dde89ba-8c3b-331c-bc0c-b55b999ddda7","expiresOn":"2021-06-15 18:52:57 +0200"},{"name":"thekingroi","uuid":"ca3cd7ed-b662-39e2-8907-ba204652c4b9","expiresOn":"2021-06-15 18:52:54 +0200"},{"name":"baran_furaly","uuid":"cfac8cb8-38ab-3776-96de-a51231d21f9f","expiresOn":"2021-06-15 18:52:58 +0200"},{"name":"erikas145","uuid":"26eefd97-d276-37ee-8ae8-69b5e28956d6","expiresOn":"2021-06-15 18:52:47 +0200"},{"name":"wiktor123459","uuid":"c8e02b74-78a8-30d8-953b-fe57aefa511d","expiresOn":"2021-06-17 14:07:20 +0200"},{"name":"invincibledon","uuid":"16c3dd75-f68a-30cf-bfcf-ddc4da0b709d","expiresOn":"2021-06-15 18:52:56 +0200"},{"name":"subzero1388","uuid":"c721f787-2ce9-38a6-aaaf-8651822eb038","expiresOn":"2021-06-15 18:52:47 +0200"},{"name":"ysufsalodarfodar","uuid":"8117b47e-dd48-3087-a03f-308342dc1154","expiresOn":"2021-06-15 18:52:45 +0200"},{"name":"soni_svensen","uuid":"218d546a-2a89-3555-b258-d370b73ecd1d","expiresOn":"2021-06-15 18:52:59 +0200"},{"name":"mrkiller114","uuid":"fcc3435f-81f2-314d-9618-30d6e2718260","expiresOn":"2021-06-17 14:07:20 +0200"},{"name":"jawad06541","uuid":"3c5a5f3d-8a23-301d-aea5-7b8c77199cc8","expiresOn":"2021-06-15 18:53:06 +0200"},{"name":"sorvetinhaflocos","uuid":"bb7eb5d4-b534-30d3-8145-6bd4896c766b","expiresOn":"2021-06-15 18:52:53 +0200"},{"name":"jadon_s","uuid":"a37a4210-cb85-36c1-b00a-b01769ef0d2f","expiresOn":"2021-06-15 18:53:01 +0200"},{"name":"rovyplayz11","uuid":"40439a46-fa81-3c0d-b441-217dcc08fc92","expiresOn":"2021-06-15 18:52:45 +0200"},{"name":"ayushkumar123","uuid":"45376aca-9c4b-3a64-b1a9-a2b98f1bb4cc","expiresOn":"2021-06-15 18:52:53 +0200"},{"name":"majkan09","uuid":"ed9e5f5d-448d-3e6d-a241-396f678206f5","expiresOn":"2021-06-15 18:53:08 +0200"},{"name":"tantan27","uuid":"cde2606c-eac0-3edc-98f3-bcbea542ab9a","expiresOn":"2021-06-15 18:52:59 +0200"},{"name":"krijal3000","uuid":"2aca8876-3c34-3ecd-b19f-48c1edbc80bc","expiresOn":"2021-06-15 18:52:56 +0200"},{"name":"vinjr","uuid":"3053f884-0678-3807-913f-75dc788ef2b3","expiresOn":"2021-06-15 18:52:48 +0200"},{"name":"giomodeba123","uuid":"528ad5a6-fc9c-307b-9601-ac8e3fec4697","expiresOn":"2021-06-15 18:52:55 +0200"},{"name":"1986luk","uuid":"84c5dd5c-f7b9-3721-af65-eef91b9ab03c","expiresOn":"2021-06-15 18:53:01 +0200"},{"name":"gdbsdvxvdgx","uuid":"4a2d8c00-780a-36da-84a2-b469a0046e2e","expiresOn":"2021-06-15 18:53:01 +0200"},{"name":"bhavy1234","uuid":"c939f55c-8aa8-377c-9627-ffd35fcb20b6","expiresOn":"2021-06-15 18:53:05 +0200"},{"name":"viktoria1979","uuid":"2dff1627-8cfa-358c-bea7-0ff85a881add","expiresOn":"2021-06-15 18:53:02 +0200"},{"name":"horang99","uuid":"8165cc3f-49fd-3caa-a551-7c3ff2289ec8","expiresOn":"2021-06-15 18:52:55 +0200"},{"name":"RumbleCrumble","uuid":"98bf5861-0401-45e0-87aa-096c0c72d183","expiresOn":"2021-04-24 15:18:38 +0200"}])

  const init = async () => {
    /*
    const objects = await Promise.all(users.map(user=>
      fetch(`https://api.mojang.com/users/profiles/minecraft/${user.name}`)
    ));
    console.log(objects);*/
  }
  useEffect(()=>{init()},[])
    const click =()=>{
      const reg = /\d/
      const newUsers = users.filter(x=> reg.test(x.name));
      setUsers(newUsers)
  }
  const classes = useStyles()
  return (
    <div className="App">
      <Button variant="contained" color="primary"  onClick={click}>
      Filtruj Dane
</Button>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">uuid</TableCell>
            <TableCell align="right">ExpiresOn</TableCell>
            <TableCell > Przekieruj</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.uuid}</TableCell>
              <TableCell align="right">{row.expiresOn}</TableCell>
              <TableCell align="right"><a href={`https://api.mojang.com/users/profiles/minecraft/${row.name}`}>Szukaj</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;
