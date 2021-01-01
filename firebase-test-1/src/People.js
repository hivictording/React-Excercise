import React from 'react'
import {Grid,Table} from 'semantic-ui-react'
import firebase from './firebase-config'

import Person from './Person'

export default function People() {
    const [people,setPeople] = React.useState([]);
    const db = firebase.firestore().collection('person')

    const handleSave = async (person) => {
        await db.doc(person.id).set({
            ...person,
        })

    }

    const handleRemove = async (id) => {
        await db.doc(id).delete()
        // setPeople(prev => {
        //     return prev.filter(person => person.id !== id)
        // })
    }

    React.useEffect(() => {

        const fetchData = async () => {
            
            // const snapshot = await db.get();
            // setPeople(snapshot.docs.map(doc => ({...doc.data(),id: doc.id})
            //     ))

            const unsubscribe = db.onSnapshot(snapshot => {   
                const data = snapshot.docs.map(doc => ({...doc.data(),id: doc.id}))
                setPeople([...data])
            })

            return unsubscribe
        }

        const unsubscribe = fetchData()
        fetchData()

        return () => {
            unsubscribe()
        }
        
    },[])

    return (
        <Grid container style={{marginTop: 20}}>
            <Table  celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>User Name</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Operations</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {people && people.map(p => (
                        <Person key={p.id} person={p} handleSave={handleSave} handleRemove={handleRemove}/>
                    ))}
                    
                </Table.Body>
            </Table>
        </Grid>
        
    )
}