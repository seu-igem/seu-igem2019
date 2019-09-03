import React from 'react';
import { ActivityItem } from 'office-ui-fabric-react/lib/ActivityItem';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import { CommandBarButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { locaCtrl } from '../../loca-ctrl';
import '../css/DocPageInfobar.css';

interface IDocPageInfobarProps {
   navs: Array<{
      text: string;
      path: string;
   }>;
   editors?: Array<{
      name: string;
      hash: string;
      nameAbbr: string;
      avatar: string;
   }>;
   timestamp: string;
   switchSettingCallout: () => void;
}

export default class DocPageInfobar extends React.Component<IDocPageInfobarProps> {
   public $SettingBtn?: HTMLDivElement | null;

   public render() {
      const { navs, editors = [], timestamp, switchSettingCallout } = this.props;
      let activityDescription: any[];
      switch (editors.length) {
         case 0:
            activityDescription = [
               <span key={1} className='editor-name'>Someone</span>,
            ];
            break;
         case 1:
            activityDescription = [
               <Link key={1} className='editor-name' onClick={
                  () => { locaCtrl.navTo('/Team', editors[0].hash); }
               }>{editors[0].name}</Link>,
            ];
            break;
         case 2:
            activityDescription = [
               <Link key={1} className='editor-name' onClick={
                  () => { locaCtrl.navTo('/Team', editors[0].hash); }
               }>{editors[0].name}</Link>,
               <span key={2}>&nbsp;and&nbsp;</span>,
               <Link key={3} className='editor-name' onClick={
                  () => { locaCtrl.navTo('/Team', editors[1].hash); }
               }>{editors[1].name}</Link>,
            ];
            break;
         case 3:
            activityDescription = [
               <Link key={1} className='editor-name' onClick={
                  () => { locaCtrl.navTo('/Team', editors[0].hash); }
               }>{editors[0].name}</Link>,
               <span key={2}>,&nbsp;</span>,
               <Link key={3} className='editor-name' onClick={
                  () => { locaCtrl.navTo('/Team', editors[1].hash); }
               }>{editors[1].name}</Link>,
               <span key={4}>&nbsp;and&nbsp;</span>,
               <Link key={5} className='editor-name' onClick={
                  () => { locaCtrl.navTo('/Team', editors[2].hash); }
               }>{editors[2].name}</Link>,
            ];
            break;
         default:
            activityDescription = [
               <Link key={1} className='editor-name' onClick={
                  () => { locaCtrl.navTo('/Team', editors[0].hash); }
               }>{editors[0].name}</Link>,
               <span key={2}>&nbsp;and&nbsp;</span>,
               <span key={3} className='editor-name'>
                  {editors.length - 1} others
               </span>,
            ];
      }
      activityDescription.push(
         <span key={activityDescription.length + 1}> edited this page</span>
      );

      const activityProps: any = {};
      if (editors.length === 0) {
         activityProps.activityIcon = <Icon iconName={'Edit'} style={{ fontSize: '26px', width: '32px', height: '32px' }} />;
      } else {
         activityProps.activityPersonas = editors.map(editor => ({
            text: editor.name,
            imageInitials: editor.nameAbbr,
            imageUrl: editor.avatar,
         }));
      }

      return (
         <>
            <div id='doc-infobar-bcs'>
               <div className='Breadcrumb-fixmargin'>
                  <Breadcrumb items={navs.map(nav => ({
                     text: nav.text,
                     key: nav.text,
                     onClick: () => { locaCtrl.navTo(nav.path); },
                  }))} />
               </div>
               <div>
                  <CommandBarButton
                     iconProps={{ iconName: 'Share' }}
                     text='Share'
                     menuProps={{
                        items: [
                           {
                              key: 'emailMessage',
                              text: 'Email message',
                              iconProps: { iconName: 'Mail' },
                           },
                           {
                              key: 'calendarEvent',
                              text: 'Calendar event',
                              iconProps: { iconName: 'Calendar' },
                           },
                        ],
                     }}
                     className={
                        'doc-infobar-share'
                     }
                  />
               </div>
               <div className='doc-infobar-settings' ref={el => this.$SettingBtn = el}>
                  <IconButton
                     iconProps={{ iconName: 'Settings' }}
                     onClick={switchSettingCallout}
                  />
               </div>
            </div>
            <div id='doc-infobar-activity'>
               <ActivityItem
                  activityDescription={activityDescription}
                  timeStamp={timestamp}
                  {...activityProps}
               />
            </div>
         </>
      );
   }
}
