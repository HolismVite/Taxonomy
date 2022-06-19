import { DialogForm, Text } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Title is not provided'
    />
</>

const Upsert = () => {
    return <DialogForm
        entityType='Hierarchy'
        inputs={inputs}
    />
}

export default Upsert;