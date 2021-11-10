export const menuData = [
  {
    key: '0',
    label: 'Networking',
    icon: 'fa fa-folder',
    title: 'Documents Folder',
    children: [],
  },
  {
    key: '1',
    label: 'SQA',
    icon: 'fa fa-desktop',
    title: 'Desktop Folder',
    children: [],
  },
  {
    key: '2',
    label: 'Development',
    icon: 'fa fa-download',
    title: 'Downloads Folder',
    children: [
      {
        key: '1-0',
        label: 'Web Development',
        icon: 'fa fa-file',
        title: 'Documents Folder',
        children: [
          {
            key: '1-02',
            label: 'Front End',
            icon: 'fa fa-file',
            title: 'Documents Folder',
            children: [
              {
                key: '1-20',
                label: 'CSS',
                icon: 'fa fa-file',
                title: 'Documents Folder',
              },
              {
                key: '1-40',
                label: 'JavaScript',
                icon: 'fa fa-file',
                title: 'Documents Folder',
              },
            ],
          },
          {
            key: '1-50',
            label: 'Back End',
            icon: 'fa fa-file',
            title: 'Documents Folder',
          },
        ],
      },
    ],
  },
];
