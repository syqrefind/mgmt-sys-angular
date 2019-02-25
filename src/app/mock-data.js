"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var characters = [
    {
        'Quote Type': 'DYR',
        'Quote#': 145,
        Contact: '',
        Task: '',
        'Due Date': '2015-12-23T10:28:00Z',
        'Task Type': 'Follow-up',
        Customers: ['Summitworks Technologies Inc, Confcat-Anand D'],
    },
    {
        'Quote Type': 'BF',
        'Quote#': 213,
        Contact: '',
        Task: '',
        'Due Date': '2015-12-23T10:18:00Z',
        'Task Type': 'Follow-up',
        Customers: ['AAA', 'Contcat-IIII JJJJ.'],
    },
    {
        'Quote Type': 'BF',
        'Quote#': undefined,
        Contact: '',
        Task: 'tesw',
        'Due Date': '2015-12-22T22:01:00Z',
        'Task Type': 'Follow-up',
        Customers: [],
    },
    {
        'Quote Type': 'DYR',
        'Quote#': 144,
        Contact: '',
        Task: '',
        'Due Date': '2015-12-05T08:22:00Z',
        'Task Type': 'Follow-up',
        Customers: ['Summitworks Technologies', 'Contact-Tapan Dubey'],
    },
    {
        'Quote Type': 'BF',
        'Quote#': 212,
        Contact: '',
        Task: '',
        'Due Date': '2015-12-05T08:02:00Z',
        'Task Type': 'Follow-up',
        Customers: ['Summitworks Technologies', 'Contact-Tapan Dubey'],
    },
    {
        'Quote Type': 'BF',
        'Quote#': 210,
        Contact: '',
        Task: '',
        'Due Date': '2015-11-27T07:45:00Z',
        'Task Type': 'Follow-up',
        Customers: ['Acclaim Industries Ltd.', 'Contcat-Tapan Dubey'],
    },
    {
        'Quote Type': 'DYR',
        'Quote#': 142,
        Contact: '',
        Task: '',
        'Due Date': '2015-11-27T07:34:00Z',
        'Task Type': 'Follow-up',
        Customers: ['Summitworks technologies', 'Contcat-test test'],
    },
    {
        'Quote Type': 'DYR',
        'Quote#': 141,
        Contact: '',
        Task: '',
        'Due Date': '2015-11-27T07:15:00Z',
        'Task Type': 'Follow-up',
        Customers: ['1000', 'Contcat-aa aa.'],
    },
    {
        'Quote Type': 'DYR',
        'Quote#': 135,
        Contact: '',
        Task: '',
        'Due Date': '2015-11-27T07:18:00Z',
        'Task Type': 'Follow-up',
        Customers: ['2424', 'Contcat-444 444'],
    },
    {
        'Quote Type': 'BF',
        'Quote#': 205,
        Contact: '',
        Task: '',
        'Due Date': '2015-11-19T08:18:00Z',
        'Task Type': 'Follow-up',
        Customers: ['Summitworks technologies, Contcat-Anand Dubey'],
    },
];
for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
    var obj = characters_1[_i];
    if (obj.Task === '') {
        obj.Task = obj['Quote Type'] + "-Quote ID " + obj['Quote#'] + ", Due Date " + obj['Due Date'] + ", " + obj.Customers;
    }
}
while (characters.length <= 121){
    //characters.push.apply(characters, characters);
    characters.push(...characters);
}
for (let i = 0; i < (160 - 121); i++){
    characters.pop();
};
console.log(characters);
console.log('---------------------------------------------------------');
console.log(JSON.stringify(characters));
