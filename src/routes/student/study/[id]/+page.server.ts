import { error } from '@sveltejs/kit';


function getVidID(url:string){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

export const load = async ({ params }: { params: any }) => {
    const studyId = params.id;
    if (studyId == '42011') {
        return { vidURL : 'https://pb.st-innovation.in.th/api/files/rwa4d5u1v04xmrv/dqor7i54gd6wo2n/vid20230413144718_VS0tBNjJ6P.mp4?token=' }
    }
    else if (studyId == '42012') {
        return { vidURL : 'https://pb.st-innovation.in.th/api/files/rwa4d5u1v04xmrv/fiqs5nx6xcy6c60/rancans_5rexrKf8GY.mp4?token='}
    }

    throw error(404, 'Lesson not found');

}