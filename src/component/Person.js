import React, { useEffect, useState } from 'react';
import axios from 'axios';    // axios 통신기능 가져오기
import { Box, Typography, Paper } from '@mui/material';

function Person() {
    const [list, setList] = useState([]);

    async function fnGetPerson(){
        // tbl_person 데이터 가져오기
        try {
            const res = await axios.get("http://localhost:3100/person");
            if(res.data.success){
                setList(res.data.list);
                console.log(res.data.list);
            } else {
                console.log("에러");
            }
        } catch(err) {
            console.log("db 어떻게 가져와?");
        }

    }

    useEffect(() => {
        fnGetPerson();
    }, []);

    return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={3}
        sx={{ backgroundColor: '#f0f4f8' }}
    >
        {list.map((person) => (
        <Paper key={person.id} sx={{ width: '100%', maxWidth: '600px', mb: 2, p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {person.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {person.gender}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {person.phone}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {person.addr}
            </Typography>
        </Paper>
        ))}
    </Box>
    );
}

export default Person;