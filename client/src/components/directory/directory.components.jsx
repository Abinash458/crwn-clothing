import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {

    return (
        <DirectoryMenuContainer className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </DirectoryMenuContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
