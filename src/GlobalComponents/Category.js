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
                onChange={props.onCategoryChangeHandler}
            >
                <MenuItem value={"Must have"} primaryText="Must have" />
                <MenuItem value={"Should have"} primaryText="Should have" />
                <MenuItem value={"Can have"} primaryText="Can have" />
                <MenuItem value={"Other"} primaryText="Other" />

            </SelectField>
        </div>
    )
}

export default Category