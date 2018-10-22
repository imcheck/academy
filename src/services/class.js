import { Classes, Student, Class, Teacher } from '@models';
import moment from 'moment';
export async function getClassData(by) {
  if(by instanceof Student) {

  } else if( by instanceof Class) {
    return new Classes([{
      classId: 1,
      name: "중1-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 2,
      name: "중1-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 3,
      name: "중2-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 4,
      name: "중2-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 5,
      name: "중3-1 기초반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 6,
      name: "중3-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 7,
      name: "고1-1 기초반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 8,
      name: "고1-1 심화반",
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
      classId: 1,
      name: "중1-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 2,
      name: "중1-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 3,
      name: "중2-1 기초반",
      teacher: "Matthew",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 4,
      name: "중2-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 5,
      name: "중3-1 기초반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 6,
      name: "중3-1 심화반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 7,
      name: "고1-1 기초반",
      teacher: "Homes",
      sdate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pdate: [{
        day: "월",
        stime: "13:00",
        etime: "16:00"
      }]
    },{
      classId: 8,
      name: "고1-1 심화반",
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