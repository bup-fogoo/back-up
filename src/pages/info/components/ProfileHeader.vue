<template>
  <div class="ins-header">
    <div class="box left-aligned">
      <div class="icon">
        <svg viewBox="0 0 1024 1024" @click="$router.back()">
          <path
              d="M398.848 512l271.36 271.36c16.896 16.896 16.896 43.52 0 60.416-16.896 16.896-43.52 16.896-60.416 0l-301.568-301.568c-16.896-16.896-16.896-43.52 0-60.416l301.568-301.568c16.896-16.896 43.52-16.896 60.416 0 16.896 16.896 16.896 43.52 0 60.416l-271.36 271.36z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="box">
      <span class="name">{{ username }}</span>
    </div>

    <div class="box right-aligned">
      <div class="icon">
        <svg viewBox="0 0 24 24">
          <path
              d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.ins-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.box {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-aligned .icon {
  margin-right: auto;
}

.right-aligned .icon {
  margin-left: auto;
  transform: rotate(90deg);
}

.icon {
  width: 32px;
  height: 32px;
  color: black;
}

.icon svg {
  transform-origin: center;
}

.name {
  font-size: 16px;
  font-weight: bold;
}
</style>
