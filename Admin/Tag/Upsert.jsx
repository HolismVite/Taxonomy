import { DialogForm, Text, Slug, LongText } from '@Form'

const inputs = <>
    <Text
        column='Name'
        placeholder='Name'
        required="You have not provided a name"
    />
    <Slug />
    <LongText
        column='Description'
        placeholder='Description'
    />
</>

const UpsertTag = () => {
    return <DialogForm
        title='Tag'
        entityType='Tag'
        inputs={inputs}
    />
}

export default UpsertTag