import { useState } from 'react'
import { DialogForm, Checks, post } from '@Form'

const HierarchiesDialog = ({
    entity,
    entityGuid,
    entityType,
    pluralName,
    reloadEntity,
    ...rest
}) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <>
        <Checks
            itemsUrl={`/hierarchy/entityTypeHierarchies?entityType=${entityType}`}
            checkedItemsUrl={`/entityHierarchy/list?entityType=${entityType}&entityGuid=${entityGuid}`}
            show={item => item.name}
            choose={item => item.hierarchyGuid || item.guid}
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
        post(`/entityHierarchy/putInHierarchies?entityType=${entityType}&entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false);
                success(`${pluralName || "Hierarchies"} updated`)
            }, e => {
                setProgress(false);
                error(e)
            })
    }

    return <DialogForm
        entityType="Hierarchy"
        title={`Manage ${pluralName || "hierarchies"}`}
        inputs={inputs}
        okAction={save}
    />
}

export default HierarchiesDialog