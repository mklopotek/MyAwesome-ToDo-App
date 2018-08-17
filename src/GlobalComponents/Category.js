import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Category = (props) => {

    return (
        <div className="to-do__select-category">
            <SelectField
                style={props.styles}
                floatingLabelText="Choose task's category"
                value={props.currentCategory}
                onChange={props.onCategoryChangeAction}
            >
                <MenuItem value={"Must do"} primaryText="Must do" />
                <MenuItem value={"Should do"} primaryText="Should do" />
                <MenuItem value={"Can do"} primaryText="Can do" />
                <MenuItem value={"Other"} primaryText="Other" />

            </SelectField>
        </div>
    )
}

export default Category