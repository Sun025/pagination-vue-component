const Pagination = {
    template: `
    <div class="pagination">
        <div class="item" :class="{'disabled': index == 1}" @click="onPrevious"><</div>
        <div class="item" :class="{active: index == 1}" @click="onChangePageIndex(1)">1</div>
        <div class="item" :class="{'hide': count < 6}">...</div>
        <div class="item" :class="{active: index == item + 1}" v-for="item in middleNumber - 1" @click="onChangePageIndex(item + 1)">{{item + 1}}</div>
        <div class="item" :class="{'hide': count < 6}">...</div>
        <div class="item" :class="{'hide': count < 6, 'active': index == count}" @click="onChangePageIndex(count)">{{count}}</div>
        <div class="item" :class="{'disabled': index == count}" @click="onNext">></div>
    </div>  
    `,
    data() {
        return {
            count: 6,
            index: 1,
            middleNumber: 5, // 设置中间页码个数
        }
    },
    methods: {
        onChangePageIndex(index) {
            console.log(index);
            this.index = index;
        },

        onPrevious() {
            this.index != 1 ? this.index = this.index - 1 : this.index = 1;
        },

        onNext() {
            this.index != this.count ? this.index = this.index + 1 : this.index = this.count;
            console.log(this.index);
        }
    },
    beforeMount() {
        this.count <= this.middleNumber ? this.middleNumber = this.count : this.middleNumber = this.middleNumber;
    }
}