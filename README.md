# vue-list-table

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


demo：

<ListTable :custom-column="customColumn" :table-data="tableData" :total="total" :current-page="currentPage" :page-size.sync="pageSize" @paginationFn="paginationFn">
    <!-- <el-table-column fixed="right" label="操作" min-width="130" align="center">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="getDetail(scope.row)">详情</el-button>
      </template>
    </el-table-column> -->

    <template slot="operate" slot-scope="{scope}">
      <el-button type="text" size="small" @click="edite(scope.row)">修改</el-button>
      <el-popconfirm icon="el-icon-info" icon-color="red" title="确定删除吗？" placement="top" @onConfirm="deleteSite(scope.row.id)">
        <el-button slot="reference" type="text" size="small" style="margin-left: 10px;">删除</el-button>
      </el-popconfirm>
    </template>
</ListTable>

data() {
  return {
    customColumn: {
      loading: false,
      allColumn: [
        {
          name: '排名',
          dataColumn: 'orderIndex'
        },
        {
          name: '名称',
          dataColumn: 'street',
          columnBuilder() {
            return '<h2>90</h2>'
          }
        },
        {
          name: '操作', // 使用列的具名插槽  也可以 使用默认插槽，不过要被包一个 <el-table-column>
          dataColumn: 'operate'
        }
      ]
    },
    tableData: [],
    total: 0,
    currentPage: 1,
    pageSize: 30
  }
},
methods: {
  paginationFn(data) {
    this.currentPage = data.page // 当前页
    this.pageSize = data.limit // 每页数量
    this.getList() // 重新获取数据
  }
}
