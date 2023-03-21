import React, {useEffect, useState} from  'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData.js'

const SearchExercises = () => {

    const [search, setSearch] = useState('');

    const [exercises, setExercises] = useState([]);

    const [bodyParts, setBodyParts] = useState([]);

    //This function is gone take some time, and some data from API
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
            }
            fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            //Exercise options authorize us to make request, because we added our own API key
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack alignItems="center" mt="37px"
        justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{
                fontSize: {lg: '44px', xs: '30px'}
            }} mb="50px" textAlign="center">
               Awesome Exercises You <br/> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx = {{
                     input: {
                         fontWeight: '700',
                         border: 'none',
                         borderRadius: '4px' },
                     width: {lg: '800px', xs: '350px' },
                     backgroundColor: '#fff',
                     borderRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange = {(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder = "Search Exercices"
                />
                <Button className ="search-btn" sx={{
                    bgcolor: '#FF2625',
                    color: '#FFF',
                    textTransform: 'none',
                    width: {lg: '175px', xs: '80px' },
                    fontSize: {lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }}
                onClick = {handleSearch}>
                    Search
                </Button>
            </Box>
        </Stack>
    );
};

export default SearchExercises;