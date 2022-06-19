import { List, Text, Image, ValueWithTitle, TitleSubtitle, BooleanProperty } from '@List'
import UpsertTag from './Upsert'
import { EntitySeo } from '../../Seo/Exports'

const filters = <>
    <Text
        column='Name'
        placeholder='Name'
    />
</>

const sorts = [
    {
        caption: 'ٔName A-Z',
        column: 'Name',
        direction: 'asc'
    },
    {
        caption: 'Name Z-A',
        column: 'Name',
        direction: 'desc'
    }
]

const headers = <>
    <th></th>
    <th start>Name</th>
    <th>Is active?</th>
</>

const row = (item) => <>
    <td>
        <Image
            url={item.relatedItems.iconUrl}
            uploadUrl={`/tag/setImage?tagId=${item.id}`}
        />
    </td>
    <td>
        <TitleSubtitle
            title={
                <ValueWithTitle
                    value={item.name}
                    title={item.description}
                />}
            subtitle={item.slug}
        />
    </td>
    <td>
        <BooleanProperty
            column='isActive'
            value={item.isActive}
            actionUrl={`/tag/toggleIsActive/${item.id}`}
        />
    </td>
</>

const entityActions = (item) => <>
    <EntitySeo
        entityType='Tag'
        entityGuid={item.guid}
    />
</>

const Tags = () => {
    return <List
        title='Tags'
        entityType='Tag'
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        entityActions={entityActions}
        upsert={UpsertTag}
        hasEdit={true}
        hasDelete={true}
    />
}

export default Tags