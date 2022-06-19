import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { EntityAction } from '@List'
import TagsDialog from './TagsDialog'

const ManageTags = (props) => <EntityAction
    {...props}
    title="Manage tags"
    icon={LocalOfferIcon}
    dialog={TagsDialog}
/>

export default ManageTags