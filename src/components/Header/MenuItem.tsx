import { TFunction } from 'i18next';
import { Button } from '../../common/Button';
import { NavLink } from 'react-router-dom';
import {
    MenuItems,
    CustomNavLinkSmall,
    Span
} from './styles';

const MenuItem = ( {handleWidgetClick, t} : {handleWidgetClick: () => void, t: TFunction}) => {
    return (
      <MenuItems>
        <CustomNavLinkSmall>
          <NavLink to="food">
            <Span>{t("Food")}</Span>
          </NavLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <NavLink to="whatson">
            <Span>{t("What's On")}</Span>
          </NavLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <NavLink to="livemusic">
            <Span>{t("Live Music")}</Span>
          </NavLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: '180px' }}>
          <Span>
            <Button onClick={handleWidgetClick}>{t('Reserve Table')}</Button>
          </Span>
        </CustomNavLinkSmall>
      </MenuItems>
    );
};

export default MenuItem;