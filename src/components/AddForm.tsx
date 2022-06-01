import { useState } from "react"
import { FormControl, FormHelperText, Input, InputLabel, Button } from "@mui/material"
import { Box } from "@mui/system"
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux"
import { UseActionTypes } from "./Redux/ActionTypes"
import { toast } from "react-toastify"


const AddForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [img, setImg] = useState("")
    
    const dispatch = useDispatch()

    const newData = {
        id:Math.random(),
        first_name:firstName,
        last_name:lastName,
        email:email,
        avatar:img
    }
     console.log(firstName);

    const handleSubmit = (e:any) => {
        e.preventDefault()
        dispatch({type:UseActionTypes.ADD_USER, payload:newData })
        toast.success("Successfully added! 👌")
        setEmail('')
        setFirstName("")
        setLastName('')
        setImg('')
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <Box sx = {{display:"flex", flexDirection:"column", gap:"2rem"}}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Fisrtname</InputLabel>
                    <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} id="my-input" aria-describedby="my-helper-text" required />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Lastname</InputLabel>
                    <Input value={lastName} onChange={(e) => setLastName(e.target.value)} id="my-input" aria-describedby="my-helper-text" required />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} id="my-input" aria-describedby="my-helper-text" required />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Image url</InputLabel>
                        <Input
                        onChange = {(e) => setImg(e.target.value)}
                        id="contained-button-file"
                        type="text"
                        value={img}
                        required
                        />
                </FormControl>
                <Button variant = "contained" type = "submit">Submit</Button>
            </Box>
        </form>
        

    )
}

export default AddForm