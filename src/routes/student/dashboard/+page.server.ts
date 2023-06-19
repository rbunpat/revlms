export const load = async () => {
    const videoURL = 'https://www.youtube.com/watch?v=5qap5aO4i9A';
    const attachments = [ {
        name: 'ฟิสิกส์',
        subjectId: 'ว69420',
        date: '2020-01-01',
        studyId: '42012'
    },
    {
        name: 'เคมี',
        subjectId: 'ว42229',
        date: '2020-01-01',
        studyId: '42011'
    }];
    const avatarURL = 'https://pb.st-innovation.in.th/api/files/298udh6rky01c92/xrfy4muujirfsff/355062442_288437693641544_5378497265403469374_n_8VFfNoM0lI.png?token=';
    const studentName = 'Kriangkrai Kaewmeesri';
    const studentID = '41269';
    const studentClass = '5/2';
    return { videoURL : videoURL, attachments: attachments, avatarURL: avatarURL, studentName: studentName, studentID: studentID, studentClass: studentClass}
}