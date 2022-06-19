import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { EntityAction } from '@List'
import HierarchiesDialog from './HierarchiesDialog'

const ManageHierarchies = ({
    pluralName,
    ...rest
}) => {

    return <EntityAction
        {...rest}
        title={`Manage ${pluralName || "hierarchies"}`}
        icon={AccountTreeIcon}
        dialog={HierarchiesDialog}
    />
}

export default ManageHierarchies