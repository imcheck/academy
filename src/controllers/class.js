import { Classes, Student, Class, Teacher } from '@models';
import moment from 'moment';
export async function getClassData(by) {
  if(by instanceof Student) {

  } else if( by instanceof Class) {
    return new Classes([{
      name: "중1-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      name: "중1-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      name: "중2-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      name: "중2-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    }]);
  } else if( by instanceof Teacher) {
    return new Classes([{
      name: "중1-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      name: "중1-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      name: "중2-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      name: "중2-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    }])
  }
}