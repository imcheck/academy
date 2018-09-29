import { Classes } from '@models';
import moment from 'moment';
export async function getClassData(action) {
  return new Classes([{
    name: "중1-1 기초반",
    teacher: "Matthew",
    sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
    pdate: [{
      day: "월",
      stime: "13:00",
      dtime: "180"
    }]
  },{
    name: "중1-1 심화반",
    teacher: "Homes",
    sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
    pdate: [{
      day: "월",
      stime: "13:00",
      dtime: "180"
    }]
  },{
    name: "중2-1 기초반",
    teacher: "Matthew",
    sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
    pdate: [{
      day: "월",
      stime: "13:00",
      dtime: "180"
    }]
  },{
    name: "중2-1 심화반",
    teacher: "Homes",
    sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
    pdate: [{
      day: "월",
      stime: "13:00",
      dtime: "180"
    }]
  }])
}