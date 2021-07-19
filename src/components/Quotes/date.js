import moment from 'moment';

const formatDate = date => moment(new Date(date), 'YYYYMMDD').fromNow();

export default formatDate;
