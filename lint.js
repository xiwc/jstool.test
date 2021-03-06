let s = `
{

        // access token 常量key
        ACCESS_TOKEN: "ACCESSTOKEN",
        ACCESS_TOKEN_NAME: "accessToken",

        //------------------------ chenchaoyang start --------------------
        EVENT_MY_TASK_CREATE_SUB_TASK_SUCCESS: 'event_my_task_create_sub_task_success',
        EVENT_MY_TASK_CREATE_MAIN_TASK_MODAL_ON_SHOW: 'event_my_task_create_main_task_modal_on_show',
        EVENT_MY_TASK_CREATE_SUB_TASK_MODAL_ON_SHOW: 'event_my_task_create_sub_task_modal_on_show',

        SOCKET_CHAT_CHATPANE_ADD_FRIEND: 'socket_chat_chatpane_add_friend',
        SOCKET_CHAT_CHATPANE_DELETE_FRIEND: 'socket_chat_chatpane_delete_friend',
        SOCKET_CHAT_CHATPANE_FRIEND_ONLINE: 'socket_chat_chatpane_friend_online',
        SOCKET_CHAT_CHATPANE_FRIEND_OFFLINE: 'socket_chat_chatpane_friend_offline',
        SOCKET_CHAT_CHATPANE_CHAT_ONE_TO_ONE: 'socket_chat_chatpane_chat_one_to_one',
        SOCKET_CHAT_CHATPANE_CHAT_MORE_TO_MORE: 'socket_chat_chatpane_chat_more_to_more',
        SOCKET_CHAT_CHATPANE_CHAT_GROUP: 'socket_chat_chatpane_chat_group',
        SOCKET_CHAT_CHATPANE_PROJECT_NOTIFY: 'socket_chat_chatpane_project_notify',
        SOCKET_CHAT_CHATPANE_TASK_NOTIFY: 'socket_chat_chatpane_task_notify',
        SOCKET_CHAT_CHATPANE_MY_TASK_NOTIFY: 'socket_chat_chatpane_my_task_notify',
        SOCKET_CHAT_CHATPANE_CALENDAR_NOTIFY: 'socket_chat_chatpane_calendar_notify',
        SOCKET_CHAT_CHATPANE_MY_CALENDAR_NOTIFY: 'socket_chat_chatpane_my_calendar_notify',
        SOCKET_CHAT_CHATPANE_SHEND_ME_MESSAGE: 'socket_chat_chatpane_send_me_message',
        SOCKET_CHAT_CHATPANE_NOTIFY_PANE: 'socket_chat_chatpane_notify_pane',
        SOCKET_CHAT_CHATPANE_NOT_LOGIN: 'socket_chat_chatpane_not_login',
        SOCKET_CHAT_CHATPANE_LOGIN_SUCCESS: 'socket_chat_chatpane_login_success',

        SOCKET_CHAT_CHATPANE_ADD_MESSAGE_COUNT: 'socket_chat_chatpane_add_message_count',

        SOCKET_CHAT_CHATPANE_CREATE_CHATGROUP_ROOM: 'socket_chat_chatpane_careate_chatgroup_room',
        SOCKET_CHAT_CHATPANE_CREATE_CHATGROUP_ROOM_SUCCESS: 'socket_chat_chatpane_careate_chatgroup_room_success',

        EVENT_CHAT_CHATFRIEND_ADD_MESSAGE_COUNT: 'event_chat_chatfriend_add_message_count',
        EVENT_CHAT_CHATDIALOGPERMSG_RESEND_MESSAGE: 'event_chat_chatdialogpermsg_resend_message',

        CALLBACK_EVENT_CHAT_CHATPANEL_FRIEND: 'callback_event_chat_chatpanel_friend',
        CALLBACK_EVENT_CHAT_CHATPANEL_PROJECT: 'callback_event_chat_chatpanel_project',
        CALLBACK_EVENT_CHAT_CHATPANEL_GROUPCHAT: 'callback_event_chat_chatpanel_groupchat',

        CALLBACK_EVENT_CHAT_CHATDIALOG_SEARCH_TASK: 'callback_event_chat_chatdialog_search_task',

        SOCKET_CHAT_CHATPANE_BROADCAST_UPDATE_PROJECT_LIST: 'socket_chat_chatpane_broadcast_update_project_list',
        SOCKET_CHAT_CHATPANE_BROADCAST_UPDATE_GROUP_LIST: 'socket_chat_chatpane_broadcast_update_group_list',

        EVENT_BURNDOWN_CHART_REFRESH: 'event_burndown_chart_refresh',

        //------------------------ chenchaoyang end --------------------

        //------------------------ gaosong start --------------------
        EVENT_MY_SCHEDULE_CREATE_SCHEDULE_MODAL_ON_SHOW: 'event_my_schedule_create_schedule_modal_on_show',
        EVENT_MY_SCHEDULE_EDIT_SHOW: 'event_my_schedule_edit_show',
        EVENT_MY_SCHEDULE_EDIT_CAN_DELETE_ATTACH: 'event_my_schedule_edit_can_delete_attach',
        EVENT_MY_SCHEDULE_EDIT_NOT_CAN_DELETE_ATTACH: 'event_my_schedule_edit_not_can_delete_attach',
        EVENT_MY_SCHEDULE_PANE_REFESH: 'event_my_schedule_pane_refesh',
        EVENT_MY_PRO_CREATE_SPRINT_MODAL_ON_SHOW: 'event_my_pro_create_sprint_modal_on_show',
        //------------------------ gaosong end --------------------

        //------------------------ lijian start --------------------



        //------------------------ lijian end --------------------

        //------------------------ liumin start --------------------
        EVENT_MY_NEWS_NEWSPANE_UNREADNUM: "event_my_news_newspane_unreadnum",

        //------------------------ liumin end --------------------

        //------------------------ raoenhui start --------------------
        //查询任务面板
        EVENT_MY_TASK_CREATE_TASK_PANE_SEARCH: 'event_my_task_create_task_pane_search',
        //任务详情添加筛选条件
        EVENT_MY_TASK_EDIT_ADD_FILTER: 'event_my_task_edit_add_filter',
        //滑出任务详情
        EVENT_MY_TASK_EDIT_SHOW: 'event_my_task_edit_show',
        //弹出任务详情
        EVENT_MY_TASK_EDIT_SHOW_MODAL: 'event_my_task_edit_show_modal',
        //当新建子任务时，父任务详情里的子任务数量需要增加
        EVENT_MY_TASK_EDIT_CHANGE_SUBCOUNT: 'event_my_task_edit_change_subcount',
        //弹出移除任务窗口
        EVENT_TASK_TRANSFER_MODAL_ON_SHOW: 'event_task_transfer_modal_on_show',
        //设置默认移交任务执行人
        EVENT_TASK_TRANSFER_RESET_FINISHUSER: 'event_task_transfer_reset_finishuser',
        //移交任务成功
        EVENT_TASK_TRANSFER_MODAL_SUCCESS: 'event_task_transfer_modal_success',
        //新建任务任务面板加数据
        EVENT_MY_TASK_CREATE_ADD_TASK_PANE: 'event_my_task_create_add_task_pane',
        //删除任务任务面板加数据
        EVENT_MY_TASK_EDIT_DEL_TASK_PANE: 'event_my_task_edit_del_task_pane',
        //新建子任务任务面板加数据
        EVENT_MY_TASK_CREATE_SUB_ADD_TASK_PANE: 'event_my_task_create_sub_add_task_pane',
        //任务编辑修改任务面板变更
        EVENT_MY_TASK_PANE_TASK_EDIT_CHANGE: 'event_my_task_pane_task_edit_change',
        //任务卡片刷新
        EVENT_MY_TASK_ITEM_REFRESH: 'event_my_task_item_refresh',
        //任务卡片点击时间
        EVENT_MY_TASK_ITEM_GET_TIME: 'event_my_task_item_get_time',
        //任务卡片子任务数量变更
        EVENT_MY_SUB_TASK_AND_TASK_CHANGE_COUNT: 'event_my_sub_task_and_task_change_count',
        //消息news-content模块消息数变更
        EVENT_MY_NEWS_CONTENT_MESSAGE_COUNT_CHANGE: 'EVENT_MY_NEWS_CONTENT_MESSAGE_COUNT_CHANGE',
        //消息面板刷新
        EVENT_MY_NEWS_PANE_ATTACH: 'event_my_news_pane_attach',
        //任务面板是否有此任务
        EVENT_MY_TASK_PANE_ISHAVE_TASK: 'event_my_task_pane_ishave_task',
        //------------------------ raoenhui end --------------------

        //------------------------ shaojingjing start --------------------



        //------------------------ shaojingjing end --------------------

        //------------------------ shenjiafang start --------------------
        EVENT_MY_RESOURCE_ROUTER_CLICK: "event_my_resource_router_click",
        EVENT_MY_RESOURCE_DATABASE_ROUTERBTN_DISABLED: "event_my_resource_database_routerbtn_disabled",
        EVENT_MY_RESOURCE_CODEHOSTING_ROUTERBTN_TITLE: "event_my_resource_codehosting_routerbtn_title",
        EVENT_MY_RESOURCE_CLOUDSERVER_ROUTERBTN_DISABLED: "event_my_resource_cloudserver_routerbtn_disabled",
        EVENT_MY_RESOURCE_DOCKER_TAGC_LOADING: "event_my_resource_docker_tagc_loading",
        EVENT_MY_RESOURCE_DEFAULT_EMAIL_TIP: "event_my_resource_default_email_tip",
        EVENT_MY_RESOURCE_ZONECARD_CLICK: "event_my_resource_zonecard_click",
        //------------------------ shenjiafang end --------------------

        //------------------------ shenqingling start --------------------

        EVENT_CHAT_CHAT_FRIEND_CLICKDIALOG: "event_chat_chat_friend_clickdialog",
        EVENT_CHAT_CHAT_HISTORY_CLICKHISTORY: "event_chat_chat_history_clickhistory",
        EVENT_CHAT_CHAT_GROUP_CLICKGROUP: "event_chat_chat_group_clickgroup",
        EVENT_CHAT_CHAT_HISTORY_GROUP_CLICKGROUP: "event_chat_chat_history_group_clickgroup",
        EVENT_CHAT_CHAT_FRIEND_ADDFRIEND: "event_chat_chat_friend_addfriend",
        EVENT_CHAT_CHAT_FRIEND_ADDTEMPDIA: "event_chat_chat_friend_addtempfriend",
        //删除话题
        EVENT_CHAT_CHATGROUP_DELETEGROUP: "event_chat_chatgroup_deletegroup",
        //删除话题后更新列表
        EVENT_CHAT_CHAT_GROUP_DELETEGROUP: "event_chat_chat_group_deletegroup",
        EVENT_CHAT_CHATGROUP_MESSAGETOZERO: "event_chat_chatgroup_messagetozero",
        EVENT_CHAT_CHATGROUP_ADD_MESSAGE_COUNT: "event_chat_chatgroup_add_message_count",
        SOCKET_CHAT_CHATPANE_BROADCAST_UPDATE_NEWFRIEND_LIST: "socket_chat_chatpane_broadcast_update_newfriend_list",
        CALLBACK_EVENT_CHAT_CHATPANEL_RECENT: "callback_event_chat_chatpanel_recent",
        CALLBACK_EVENT_CHAT_CHATPANEL_ONLINESERVER: "callback_event_chat_chatpanel_onlineserver",
        SOCKET_CHAT_CHATPANE_FRIEND_ALLONLINE: "socket_chat_chatpane_friend_allonline",
        SOCKET_CHAT_CHATPANE_FRIEND_ALLOFFLINE: "socket_chat_chatpane_friend_alloffline",
        //签到成功后发布事件刷新项目动态页面
        EVENT_USER_SIGNIN_NOTICE_PROJECTDYNAMIC: "event_user_signin_notice_projectdynamic",
        //项目下文件移动事件
        EVENT_PROJECT_DYNAMIC_MOVETOANOTHERFOLDER: "event_project_dynamic_movetoanotherfolder",
        //上传文件从项目选择
        EVENT_PROJECT_UPLOAD_ATTACHMENT: "event_project_uplaod_attachment",
        //------------------------ shenqingling end --------------------


        //------------------------ sunlijun start --------------------



        //------------------------ sunlijun end --------------------

        //------------------------ xiweicheng start --------------------

        PROJECT_ID: "PROJECTID",
        PROJECT_NAME: "PROJECTNAME",
        EVENT_COMP_PROJECT_CREATE: 'event_comp_project_create',
        EVENT_COMP_PROJECT_EDIT: 'event_comp_project_edit',
        EVENT_COMP_INVITE_MEMBER: 'event_comp_invite_member',
        EVENT_PROJECT_SELECTED_CHANGED: 'event_project_selected_changed',
        EVENT_APP_TIGGER_SIDEBAR_MENU: 'event_app_tigger_sidebar_menu',
        EVENT_APP_VIEW_CLICK: 'event_app_view_click',
        EVENT_MY_PROJECT_REFRESH_PROJECT_LIST: 'event_my_project_refresh_project_list',
        EVENT_APP_VIEW_RESIZED: 'event_app_view_resized', // app container重新计算size
        EVENT_APP_HELP_ABOUT_SHOW: 'event_app_help_about_show', // 显示帮助页面
        EVENT_COMP_UPLOADER_SHOW: 'event_comp_uploader_show', // 显示文件上传页面

        ROLE_ID_PROJECT_MEMBER: 'cf47cd069fac11e48fc84437e6e6f951', // 项目成员角色ID
        ROLE_ID_PROJECT_MANAGER: 'c424247e9fac11e48fc84437e6e6f951', // 项目经理角色ID
        MOBILE_WIDTH_BREAK_POINT: 768, // Mobile屏幕宽度界限

        //------------------------ xiweicheng end --------------------

        //------------------------ xufan start --------------------

        EVENT_DYNAMIC_SELECTED_PROJECT: 'event_dynamic_selected_project',
        EVENT_PROJECT_DYNAMIC_FILE_SHOW: 'event_project_dynamic_file_show',
        EVENT_PROJECT_DYNAMIC_DATE_SHOW: 'event_project_dynamic_date_show',

        //------------------------ xufan end --------------------

        //------------------------ zhangjianyu start --------------------
        EVENT_CHAT_INFO_FRIEND_LOGINNAME: 'event_chat_info_friend_loginname',
        EVENT_USER_SETTING_ROOT_CHANGED: 'event_user_setting_root_change',
        KEY_STEP_MAIL_ACITVE_CONFIRM: 'step_mail_acitve_confirm',
        EVENT_COMP_ACTIVATION_REMIND: 'event_comp_activation_remind',
        EVENT_MY_SETTINGS_PANE_CHANGE_TAB: 'event_my_settings_pane_change_tab',
        EVENT_CHAT_GROUP_CHAT_HISTORY_AT: 'evet_chat_group_chat_history_at',
        EVENT_CHAT_CHATGROUP_ADD_MESSAGE_AT: 'evet_chat_chatgroup_add_message_at',
        EVENT_CHAT_CHATGROUP_CANCEL_MESSAGE_AT: 'evet_chat_chatgroup_cancel_message_at',
        EVENT_FORM_WORK_TO_STEP_CREATEPROJECT: 'event_from_work_to_step_createproject',
        EVENT_MAIL_BIND_TRIGGER: 'event_mail_bind_trigger',
        EVENT_MAIL_ACTIVE_TRIGGER: 'event_mail_active_trigger',
        //------------------------ zhangjianyu end --------------------
    
}`;

console.log(s);