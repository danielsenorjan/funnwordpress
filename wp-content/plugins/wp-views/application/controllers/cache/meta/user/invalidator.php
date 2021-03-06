<?php

namespace OTGS\Toolset\Views\Controller\Cache\Meta\User;

use OTGS\Toolset\Views\Controller\Cache\Meta\InvalidatorBase;

/**
 * Usermeta cache controller.
 *
 * @since 2.8.1
 */
class Invalidator extends InvalidatorBase {

	const FORCE_DELETE_ACTION = 'wpv_action_wpv_delete_transient_usermeta_keys';
	const TYPES_GROUP_UPDATED_ACTION = 'types_fields_group_user_saved';

	/**
	 * Add the right invalidation hooks for the cache on postmeta fields.
	 *
	 * @since 2.8.1
	 */
	protected function add_update_hooks() {
		add_action( 'added_user_meta', array( $this, 'maybe_update_transient' ), 10, 4 );
		add_action( 'updated_user_meta', array( $this, 'maybe_update_transient' ), 10, 4 );
	}

}
