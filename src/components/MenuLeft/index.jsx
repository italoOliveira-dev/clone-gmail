import { useState } from 'react';
import Compose from './compose'
import Inbox from './inbox'
import Label from './label';

export default function MenuLeft() {

  // eslint-disable-next-line no-unused-vars
  const [inbox, setInbox] = useState([{
    id: 1,
    image: '/src/assets/icons/inbox.svg',
    label: 'Inbox',
    quantidade: 7.152,
    selecionado: true
  }, {
    id: 2,
    image: '/src/assets/icons/alarm.svg',
    label: 'Snoozed',
    quantidade: 0,
    selecionado: false
  }, {
    id: 3,
    image: '/src/assets/icons/send.svg',
    label: 'Send',
    quantidade: 0,
    selecionado: false
  }, {
    id: 4,
    image: '/src/assets/icons/draft.svg',
    label: 'Drafts',
    quantidade: 90,
    selecionado: false
  }, {
    id: 5,
    image: '/src/assets/icons/expand_more.svg',
    label: 'More',
    quantidade: 0,
    selecionado: false
  }]);

  return (
    <div className="px-6">
      <Compose></Compose>
      {inbox.map((item) => (
        <Inbox
          key={item.id}
          id={item.id}
          image={item.image}
          label={item.label}
          quantidade={item.quantidade}
          selecionado={item.selecionado}
        />
      ))}
      <Label></Label>
    </div>
  );
}