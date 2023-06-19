<script>
	import '../app.postcss';
</script>


<div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">RevLMS</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <!-- <li><a>Home</a></li> -->
		<li><a href="/student/dashboard">Dashboard</a></li>
        <!-- <li>
          <details>
            <summary>
              Links
            </summary>
            <ul class="p-2 bg-base-100">
              <li><a>S</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li> -->
      </ul>
    </div>
  </div>

<slot />
