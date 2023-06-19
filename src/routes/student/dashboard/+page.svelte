<script lang="ts">
    export let data;
</script>

<div class="w-full flex flex-row mt-10 justify-evenly">
    <div class="avatar flex items-center">
      <div class="w-48 rounded-xl">
        <img src="{data.avatarURL}" />
      </div>
    </div>
  
    <div class="flex-col items-end text-3xl mt-5">
        <p class="mb-4">ชื่อ : {data.studentName}</p>
        <p class="mb-4">รหัสนักเรียน : {data.studentID}</p>
        <p>ห้องเรียน : {data.studentClass}</p>
    </div>
</div>

<div class="flex items-center justify-center mt-10">
  <div class="overflow-x-auto max-w-3xl text-3xl">
    <table class="table table-lg table-zebra w-full">
      <thead>
          <tr>
              <th>No.</th>
              <th>ชื่อวิชา</th>
              <th>รหัสวิชา</th>
              <th>วันที่</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          {#each data.attachments as item, i}
              <tr>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.subjectId}</td>
                  <td>{item.date}</td>
                  <td><a class="text-green-400" href="/student/study/{item.studyId}"><button class="btn btn-success">เรียน</button></a></td>
              </tr>
          {/each}
      </tbody>
  </table>
  </div>
</div>

<!-- <h1 class="mt-20 flex items-center justify-center text-2xl md:text-3xl">{data.videoURL}</h1> -->

