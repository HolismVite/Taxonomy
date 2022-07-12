import { useState } from 'react'
import { DialogForm, Checks, post } from '@Form'

const TagsDialog = ({
    entity,
    entityGuid,
    entityType,
    reloadEntity,
    ...rest
}) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <>
        <Checks
            itemsUrl={`/tag/entityTypeTags?entityType=${app.camelize(entityType)}`}
            checkedItemsUrl={`/entityTag/list?entityType=${app.camelize(entityType)}&entityGuid=${entityGuid}`}
            show={item => item.name}
            choose={item => item.tagGuid || item.guid}
            set={setChosenValues}
        />
    </>

    const save = ({
        error,
        setProgress,
        success,
    }) => {
        console.log(chosenValues)
        setProgress(true);
        post(`/entityTag/putInTags?entityType=${app.camelize(entityType)}&entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false);
                success('Tags updated')
                reloadEntity(entity)
            }, e => {
                setProgress(false);
                error(e)
            })
    }

    return <DialogForm
        {...rest}
        entityType="Tag"
        title="Manage tags"
        inputs={inputs}
        okAction={save}
    />
}

export default TagsDialog