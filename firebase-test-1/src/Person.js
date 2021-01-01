import React from 'react'
import {Table,Label, Button,Input} from 'semantic-ui-react'


function Person({person,handleRemove,handleSave}) {
    const [edit,setEdit] = React.useState(false)
    const [singlePerson,setSinglePerson] = React.useState(person)

    const handleChange = (event) => {
        setSinglePerson(prev => ({
            ...prev, 
            [event.target.name]:event.target.value
        }))
    }

    const saveHandler = async (person) => {
        handleSave(person)

        setEdit(false)
    }

    return (
        <Table.Row negative>
            <Table.Cell>
                <Label>
                    <Input name="name" 
                        size='mini'
                        disabled={!edit} 
                        value={singlePerson.name} 
                        onChange={(event) => handleChange(event)}/>
                </Label>
            </Table.Cell>
            <Table.Cell>
                <Input name="firstName" 
                        size='mini'
                        disabled={!edit} 
                        value={singlePerson.firstName} 
                        onChange={(event) => handleChange(event)}/>
            </Table.Cell>
            <Table.Cell>
                <Input name="lastName" 
                    size='mini'
                        disabled={!edit} 
                        value={singlePerson.lastName} 
                        onChange={(event) => handleChange(event)}/>
            </Table.Cell>
            <Table.Cell>
                <Input name="gender" 
                size='mini'
                        disabled={!edit} 
                        value={singlePerson.gender} 
                        onChange={(event) => handleChange(event)}/>
            </Table.Cell>
            <Table.Cell>
                <Input name="age" 
                size='mini'
                        disabled={!edit} 
                        value={singlePerson.age} 
                        onChange={(event) => handleChange(event)}/>
            </Table.Cell>
            <Table.Cell >
                {edit ? <Button primary content='Save' onClick={() => saveHandler(singlePerson)}/> : <Button primary content='Edit' onClick={() => setEdit(true)}/>}
                {edit ? <Button secondary content='Cancel' onClick={() => setEdit(false)}/> : <Button secondary content='Remove' onClick={() => handleRemove(person.id)}/>}
            </Table.Cell>
        </Table.Row>
    )
}

export default Person
