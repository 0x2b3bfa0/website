import React from 'react';
import PropTypes from 'prop-types';

import useModal from '../../hooks/useModal';
import ContactModal from '../../modals/ContactModal';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import useAllMdxAsTree from '../../hooks/useAllMdxAsTree';
import capitalize from '../../utils/capitalize';

import ContactButton from './ContactButton';
import DropdownLink from './DropdownLink';

const teamOptions = [
  {
    label: 'Overview',
    to: '/team',
    isRoot: true,
  },
  {
    label: 'Open Roles',
    to: '/team#open-roles',
    isRoot: true,
  },
];

const mapNodesToMenuOptions = nodes =>
  nodes.map(node => {
    const label = node.title ? node.title : node.name;
    return { label: capitalize(label), to: node.url };
  });

const MenuItems = ({ isCollapsedHeader, onClickItem, contactAsButton }) => {
  const [, showContactModal] = useModal(ContactModal);
  const { tree } = useAllMdxAsTree();
  const LinkFontSize = isCollapsedHeader ? 1 : 2;
  const learnOptions = mapNodesToMenuOptions(tree[0].nodes);

  learnOptions.unshift({
    label: 'Overview',
    to: '/learn',
    isRoot: true,
  });

  return (
    <>
      <DropdownMenu
        onClickItem={onClickItem}
        isCollapsedHeader={isCollapsedHeader}
        options={teamOptions}
        triggerEvent="mouseover"
      >
        <DropdownLink fontSize={LinkFontSize} to="/team" label="Team" />
      </DropdownMenu>
      <DropdownMenu
        onClickItem={onClickItem}
        isCollapsedHeader={isCollapsedHeader}
        options={learnOptions}
        triggerEvent="mouseover"
      >
        <DropdownLink fontSize={LinkFontSize} to="/learn" label="Learn" />
      </DropdownMenu>
      <ContactButton
        contactAsButton={contactAsButton}
        isCollapsedHeader={isCollapsedHeader}
        onClick={showContactModal}
        linkFontSize={LinkFontSize}
      />
    </>
  );
};

MenuItems.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  onClickItem: PropTypes.func,
  contactAsButton: PropTypes.bool,
};

MenuItems.defaultProps = {
  isCollapsedHeader: false,
  contactAsButton: true,
  onClickItem() {},
};

export default MenuItems;
